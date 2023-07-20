export const indexSettings = {
  settings: {
    index: {
      number_of_shards: '5',
      number_of_replicas: '1',
    },
  },
  mappings: {
    dynamic: 'false',
    properties: {
      businessId: {
        type: 'keyword',
      },
      cancelledByPeriodId: {
        type: 'keyword',
      },
      cancelledByReceiptId: {
        type: 'keyword',
      },
      cancellingPeriodId: {
        type: 'keyword',
      },
      cancellingReceiptId: {
        type: 'keyword',
      },
      chargeId: {
        type: 'keyword',
      },
      comingFromAppointment: {
        type: 'boolean',
      },
      createdAt: {
        type: 'long',
      },
      createdAtAsDate: {
        type: 'date',
      },
      cureCustomer: {
        properties: {
          birthday: {
            properties: {
              day: {
                type: 'long',
              },
              month: {
                type: 'long',
              },
            },
          },
          comment: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
                ignore_above: 256,
              },
            },
          },
          createdAt: {
            type: 'long',
          },
          cures: {
            type: 'object',
          },
          email: {
            type: 'keyword',
          },
          gender: {
            type: 'keyword',
          },
          id: {
            type: 'keyword',
          },
          loyalty: {
            type: 'object',
          },
          name: {
            type: 'text',
            fields: {
              keyword: {
                type: 'keyword',
                ignore_above: 256,
              },
            },
          },
          phone: {
            type: 'keyword',
          },
          skipReminders: {
            type: 'boolean',
          },
        },
      },
      cureCustomerId: {
        type: 'keyword',
      },
      cureCustomerPhoneCountry: {
        type: 'object',
      },
      cureId: {
        type: 'keyword',
      },
      customerGender: {
        type: 'keyword',
      },
      customerId: {
        type: 'keyword',
      },
      defaultUnitPrice: {
        type: 'integer',
      },
      emittedCuresId: {
        type: 'keyword',
      },
      emittedGiftVoucherId: {
        type: 'keyword',
      },
      emittedGiftVouchersId: {
        type: 'keyword',
      },
      fromClickAndCollect: {
        type: 'boolean',
      },
      giftVoucherId: {
        type: 'keyword',
      },
      id: {
        type: 'keyword',
      },
      isAdjustment: {
        type: 'boolean',
      },
      isClickAndCollect: {
        type: 'boolean',
      },
      isClickAndShop: {
        type: 'boolean',
      },
      isDeliveryFees: {
        type: 'boolean',
      },
      lineIndex: {
        type: 'long',
      },
      operationType: {
        type: 'keyword',
      },
      paymentCureId: {
        type: 'keyword',
      },
      peopleSeller: {
        type: 'keyword',
      },
      periodId: {
        type: 'keyword',
      },
      price: {
        type: 'integer',
      },
      priceBeforeDiscount: {
        type: 'integer',
      },
      priceVATExcluded: {
        type: 'integer',
      },
      productId: {
        type: 'keyword',
      },
      purchasePrice: {
        type: 'integer',
      },
      quantity: {
        type: 'double',
      },
      receiptId: {
        type: 'keyword',
      },
      resourcesSeller: {
        type: 'keyword',
      },
      seller: {
        type: 'keyword',
      },
      serviceId: {
        type: 'keyword',
      },
      status: {
        type: 'keyword',
      },
      title: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
            ignore_above: 256,
          },
        },
      },
      unitPrice: {
        type: 'integer',
      },
      vat: {
        type: 'integer',
      },
      vatRate: {
        type: 'float',
      },
      vevents: {
        type: 'object',
      },
    },
  },
};
