const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    getUsersList: {
        data: new SlashCommandBuilder()
            .setName('get-users-list')
            .setDescription('Récupère la liste des utilisateurs'),
        async execute(interaction) {
            try {
                const response = await axios.get('http://localhost:3000/users');
                const users = response.data;
                const userList = users.map(user => `- ${user.username}`).join('\n');
                await interaction.reply(`Liste des utilisateurs:\n${userList}`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de la récupération de la liste des utilisateurs.');
            }
        },
    },
}