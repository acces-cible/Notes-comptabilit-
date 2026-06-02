/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  procedures: [
    'index',
    {
      type: 'category',
      label: 'Procédures',
      collapsed: false,
      items: [
        'procedures/depots-cheque',
        'procedures/depots-directs',
        'procedures/encaissement',
        'procedures/tps-tvq',
        'procedures/das',
        'procedures/conciliation',
        'procedures/visa',
        'procedures/paie',
        'procedures/vacances',
      ],
    },
  ],
}

module.exports = sidebars
