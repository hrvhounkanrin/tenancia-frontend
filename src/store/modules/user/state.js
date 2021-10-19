export default {
  admin_list: [],
  profileList: [],
  profiles: null,
  userMenus: [],
  initalMenu: [
    {
      header: true,
      title: 'TENANCIA',
      authorizedProfiles: ['TENANT', 'LESSOR', 'REALESTATE']
    },
    {
      title: 'Biens immobiliers',
      href: '/my-properties',
      icon: {
        element: 'home-icon'
      },
      authorizedProfiles: ['LESSOR', 'REALESTATE']
    },
    {
      title: 'Portefeuille de contrats',
      href: '/my-portfolio',
      icon: {
        element: 'folder-icon'
      },
      authorizedProfiles: ['LESSOR', 'REALESTATE']
    },
    {
      title: 'Contrats de bail',
      href: '/my-contracts',
      icon: {
        element: 'file-text-icon'
      },
      authorizedProfiles: ['TENANT']
    },
    {
      title: 'Quittances de bail',
      href: '/tenant-quittances',
      icon: {
        element: 'clipboard-icon'
      },
      authorizedProfiles: ['TENANT', 'LESSOR', 'REALESTATE']
    },
    {
      title: 'Quittances bailleur',
      href: '/lessor-quittances',
      authorizedProfiles: ['LESSOR', 'REALESTATE'],
      icon: {
        element: 'list-icon'
      }
    },
    {
      title: 'Services plus',
      icon: {
        element: 'plus-icon'
      },
      authorizedProfiles: ['LESSOR', 'REALESTATE', 'TENANT'],
      child: [
        {
          href: '#',
          title: 'Réparations locatives',
          authorizedProfiles: ['LESSOR', 'REALESTATE', 'TENANT']
        },
        {
          href: '#',
          title: 'Déclarations fiscales',
          class: 'pr-2',
          authorizedProfiles: ['LESSOR', 'REALESTATE', 'TENANT']

        }

      ]
    },
    {
      title: 'Paramètres',
      authorizedProfiles: ['TENANT', 'LESSOR', 'REALESTATE'],
      icon: {
        element: 'settings-icon'
      }
    }
  ]
}
