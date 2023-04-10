export function getOrderStatus(status:string) {
    switch (status) {
      case "processing":
        return { processing: true, shipping: false, delivered: false, cancel: false };
      case "shipping":
        return { processing: true, shipping: true, delivered: false, cancel: false };
      case "delivered":
        return { processing: true, shipping: true, delivered: true, cancel: false };
      case "cancel":
        return { processing: false, shipping: false, delivered: false, cancel: true };
    }
  }

  export function getOrderData (path:string) {
    switch (path) {
      case '/admin/orders':
        return 'processing'
      case '/admin/shipping-order':
        return 'shipping'
      case '/admin/delivered-order':
        return 'delivered'
      case '/admin/cancel-order':
        return 'cancel'
    }
  }