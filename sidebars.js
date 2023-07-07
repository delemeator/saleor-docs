module.exports = {
  main: [
    {
      Overview: [
        "overview/introduction",
        "overview/architecture",
        "overview/features",
        "overview/resources",
      ],
    },
    {
      Guides: [
        "developer/channels",
        "developer/products",
        "developer/attributes",
        {
          type: "category",
          label: "Checkout",
          items: [
            "developer/checkout/overview",
            "developer/checkout/lines",
            "developer/checkout/stock",
            "developer/checkout/address",
            "developer/checkout/finalizing",
            "developer/checkout/order-to-checkout",
          ],
        },
        "developer/payments",
        "developer/stock-allocation",
        "developer/discounts",
        "developer/gift-cards",
        "developer/address",
        "developer/users",
        "developer/permissions",
        "developer/taxes",
        "developer/thumbnails",
        "developer/filtering",
        {
          type: "category",
          label: "Data Imports",
          items: ["developer/bulks/bulk-orders"],
        },
      ],
    },
    {
      type: "category",
      label: "API Usage",
      items: [
        {
          type: "autogenerated",
          dirName: "api-usage",
        },
      ],
    },
    {
      type: "category",
      label: "Saleor Cloud",
      items: ["cloud"],
    },
    {
      type: "category",
      label: "Saleor CLI",
      items: ["cli"],
    },
    {
      type: "category",
      label: "Exporting Data",
      items: [
        "developer/export/export-overview",
        "developer/export/export-products",
        "developer/export/export-gift-cards",
      ],
    },
    {
      type: "category",
      label: "Saleor App Store",
      items: [
        "developer/app-store/overview",
        {
          type: "category",
          label: "Apps",
          items: [
            "developer/app-store/apps/overview",
            "developer/app-store/apps/taxes",
            "developer/app-store/apps/crm",
            "developer/app-store/apps/adyen",
            "developer/app-store/apps/cms",
            {
              type: "category",
              label: "Emails and messages",
              items: [
                "developer/app-store/apps/emails-and-messages/overview",
                "developer/app-store/apps/emails-and-messages/sendgrid",
                "developer/app-store/apps/emails-and-messages/smtp",
                "developer/app-store/apps/emails-and-messages/troubleshooting",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Apps List",
          items: [
            {
              type: "autogenerated",
              dirName: "developer/app-store/apps-list",
            },
          ],
        },
        {
          type: "category",
          label: "Available Plugins",
          items: [
            "developer/app-store/available-plugins/admin-emails",
            "developer/app-store/available-plugins/adyen",
            "developer/app-store/available-plugins/dummy-credit-card",
            "developer/app-store/available-plugins/stripe",
            "developer/app-store/available-plugins/oidc",
            "developer/app-store/available-plugins/np-atobarai",
            "developer/app-store/available-plugins/user-emails",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Extending Saleor",
      items: [
        "developer/extending/overview",
        require("./sidebars/apps-sidebar"),
        {
          type: "category",
          label: "Webhooks",
          items: [
            "developer/extending/webhooks/overview",
            "developer/extending/webhooks/creating",
            "developer/extending/webhooks/subscription-webhook-payloads",
            "developer/extending/webhooks/payload-signature",
            "developer/extending/webhooks/asynchronous-events",
            {
              type: "category",
              label: "Synchronous events",
              items: [
                "developer/extending/webhooks/synchronous-events/key-concepts",
                "developer/extending/webhooks/synchronous-events/payment",
                "developer/extending/webhooks/synchronous-events/shipping",
                "developer/extending/webhooks/synchronous-events/tax",
                "developer/extending/webhooks/synchronous-events/transaction",
              ],
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "Plugins",
        //   items: [
        //     "developer/extending/plugins/overview",
        //     "developer/extending/payment-gateways",
        //     {
        //       type: "category",
        //       label: "Internal APIs",
        //       items: [
        //         "developer/extending/api/errors",
        //         "developer/extending/api/events",
        //         "developer/extending/api/sorters",
        //         "developer/extending/api/i18n",
        //       ],
        //     },
        //   ],
        // },
        "developer/extending/apollo-federation",
        "developer/metadata",
      ],
    },
    {
      type: "category",
      label: "Self-hosting",
      items: [
        "setup/docker-compose",
        "setup/docker-images",
        "setup/configuration",
        "setup/read-replicas",
        "setup/windows",
        {
          type: "category",
          label: "Development",
          items: [
            "developer/running-saleor/debugging-emails",
            "developer/running-saleor/exposing-instance",
          ],
        },
        {
          type: "category",
          label: "Deploying",
          items: [
            "setup/deploy-do",
            "setup/deploy-kubernetes",
            "setup/deploy-linux",
          ],
        },
        {
          type: "category",
          label: "Monitoring",
          items: ["setup/monitoring-jaeger", "setup/monitoring-sentry"],
        },
        {
          type: "category",
          label: "Storing Files",
          items: ["setup/media-gcs", "setup/media-s3"],
        },
        {
          type: "category",
          label: "Upgrade Guides",
          items: [
            "setup/upgrading",
            "upgrade-guides/2-11-to-3-0",
            "upgrade-guides/3-0-to-3-1",
            "upgrade-guides/3-1-to-3-2",
            "upgrade-guides/3-5-to-3-6",
            "upgrade-guides/3-11-to-3-12",
            "upgrade-guides/3-12-to-3-13",
            "upgrade-guides/3-13-to-3-14",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "developer/community/contributing",
        "developer/community/faq",
        "developer/community/support",
      ],
    },
  ],
  api: [...require("./docs/api-reference/sidebar-schema.js").schemaSidebar],
  storefrontApi: [
    ...require("./docs/api-storefront/sidebar-schema.js").schemaSidebar,
  ],
};
