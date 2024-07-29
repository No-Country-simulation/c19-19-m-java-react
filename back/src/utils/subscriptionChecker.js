const cron = require('node-cron');
const { User } = require('../data'); 
const { sendSubscriptionReminder } = require('./emailService')
const { Op } = require('sequelize');

// Programa la tarea para que se ejecute todos los días a medianoche
cron.schedule('0 0 * * *', async () => {
  try {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const usersWithExpiringSubscriptions = await User.findAll({
      where: {
        subscriptionExpiresAt: {
          [Op.lte]: tomorrow,
        },
        subscriptionReminderSent: false,
      },
    });

    for (const user of usersWithExpiringSubscriptions) {
      await sendSubscriptionReminder(user.email, user.first_name, user.last_name, user.subscriptionExpiresAt);

      // Marcar el recordatorio como enviado
      user.subscriptionReminderSent = true;
      await user.save();
    }
  } catch (error) {
    console.error('Error al verificar las suscripciones:', error);
  }
});
