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