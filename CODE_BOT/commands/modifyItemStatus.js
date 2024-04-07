const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    modifyItemStatus: {
        data: new SlashCommandBuilder()
            .setName('modify-item-status')
            .setDescription('Modifie le statut d\'un item dans une watchlist')
            .addStringOption(option =>
                option.setName('user')
                    .setDescription('Le nom de l\'utilisateur')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('item')
                    .setDescription('Le nom de l\'item')
                    .setRequired(true))
            .addBooleanOption(option =>
                option.setName('completed')
                    .setDescription('Indique si l\'item est complété')
                    .setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getString('user');
            const item = interaction.options.getString('item');
            const completed = interaction.options.getBoolean('completed');
            try {
                await axios.patch(`http://localhost:3000/watchlists/${user}/items/${item}`, { completed });
                const status = completed ? 'complété' : 'non complété';
                await interaction.reply(`Le statut de l'item "${item}" dans la watchlist de l'utilisateur "${user}" a été mis à jour (${status}).`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Une erreur s\'est produite lors de la modification du statut de l\'item dans la watchlist.');
            }
        },
    },
}