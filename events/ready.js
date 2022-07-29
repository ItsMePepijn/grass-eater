module.exports = {
  name: 'ready',
  once: true,
  execute(client){
      console.log(`${client.user.tag} Has logged in!`);
      client.user.setPresence({ activities: [{ name: 'all the gamers', type: 'WATCHING' }], status: 'dnd' });
  },
};