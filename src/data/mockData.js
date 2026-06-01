export const categories = [
  {
    id: 'electronicos',
    name: 'Electrónicos',
    description: 'Tecnología de última generación',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop',
    icon: 'bi-laptop'
  },
  {
    id: 'ropa',
    name: 'Ropa',
    description: 'Moda para todos los estilos',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop',
    icon: 'bi-shop'
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    description: 'Complementa tu estilo',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=600&auto=format&fit=crop',
    icon: 'bi-watch'
  }
];

export const products = [
  // ELECTRÓNICOS (10)
  {
    id: 1, name: 'MacBook Pro 14"', category: 'electronicos', price: 1999.99, originalPrice: 2299.99, rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 2, name: 'Auriculares Inalámbricos', category: 'electronicos', price: 299.99, originalPrice: null, rating: 4.5, reviews: 85, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 3, name: 'Cámara DSLR', category: 'electronicos', price: 899.99, originalPrice: null, rating: 4.6, reviews: 98, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop', badge: { text: 'Popular', color: 'primary' }
  },
  {
    id: 4, name: 'Smartphone 5G', category: 'electronicos', price: 799.99, originalPrice: 899.99, rating: 4.7, reviews: 320, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 5, name: 'Monitor 4K', category: 'electronicos', price: 349.99, originalPrice: null, rating: 4.4, reviews: 65, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d4aff?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 6, name: 'Teclado Mecánico', category: 'electronicos', price: 129.99, originalPrice: null, rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop', badge: { text: 'Nuevo', color: 'info' }
  },
  {
    id: 7, name: 'Ratón Gaming', category: 'electronicos', price: 69.99, originalPrice: 89.99, rating: 4.5, reviews: 145, image: 'https://images.unsplash.com/photo-1527814050087-379381547339?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 8, name: 'Tablet 10"', category: 'electronicos', price: 449.99, originalPrice: null, rating: 4.3, reviews: 88, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 9, name: 'Altavoz Inteligente', category: 'electronicos', price: 99.99, originalPrice: 129.99, rating: 4.6, reviews: 412, image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66ea?q=80&w=600&auto=format&fit=crop', badge: { text: 'Popular', color: 'primary' }
  },
  {
    id: 10, name: 'Consola de Videojuegos', category: 'electronicos', price: 499.99, originalPrice: null, rating: 4.9, reviews: 890, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=600&auto=format&fit=crop', badge: null
  },

  // ROPA (10)
  {
    id: 11, name: 'Chaqueta de Cuero', category: 'ropa', price: 189.99, originalPrice: null, rating: 4.7, reviews: 56, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop', badge: { text: 'Nuevo', color: 'info' }
  },
  {
    id: 12, name: 'Camiseta de Algodón', category: 'ropa', price: 24.99, originalPrice: null, rating: 4.4, reviews: 310, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 13, name: 'Jeans Clásicos', category: 'ropa', price: 59.99, originalPrice: 79.99, rating: 4.5, reviews: 128, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 14, name: 'Vestido de Verano', category: 'ropa', price: 45.99, originalPrice: null, rating: 4.8, reviews: 75, image: 'https://images.unsplash.com/photo-1515347619362-67fd89814421?q=80&w=600&auto=format&fit=crop', badge: { text: 'Popular', color: 'primary' }
  },
  {
    id: 15, name: 'Zapatillas Deportivas', category: 'ropa', price: 89.99, originalPrice: null, rating: 4.6, reviews: 240, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 16, name: 'Abrigo de Invierno', category: 'ropa', price: 129.99, originalPrice: 159.99, rating: 4.7, reviews: 92, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 17, name: 'Sudadera con Capucha', category: 'ropa', price: 39.99, originalPrice: null, rating: 4.5, reviews: 180, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 18, name: 'Pantalones Cortos', category: 'ropa', price: 29.99, originalPrice: null, rating: 4.2, reviews: 65, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 19, name: 'Traje Elegante', category: 'ropa', price: 249.99, originalPrice: 299.99, rating: 4.8, reviews: 45, image: 'https://images.unsplash.com/photo-1594938298596-70f594f71120?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 20, name: 'Camisa Casual', category: 'ropa', price: 34.99, originalPrice: null, rating: 4.4, reviews: 110, image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e13?q=80&w=600&auto=format&fit=crop', badge: null
  },

  // ACCESORIOS (10)
  {
    id: 21, name: 'Reloj Inteligente', category: 'accesorios', price: 399.99, originalPrice: null, rating: 4.9, reviews: 203, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop', badge: { text: 'Popular', color: 'primary' }
  },
  {
    id: 22, name: 'Mochila Urbana', category: 'accesorios', price: 59.99, originalPrice: 79.99, rating: 4.4, reviews: 42, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 23, name: 'Gafas de Sol', category: 'accesorios', price: 89.99, originalPrice: null, rating: 4.6, reviews: 156, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 24, name: 'Cinturón de Cuero', category: 'accesorios', price: 35.99, originalPrice: null, rating: 4.5, reviews: 78, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop', badge: null
  }, // using same img temporarily, let's change
  {
    id: 25, name: 'Billetera Minimalista', category: 'accesorios', price: 45.99, originalPrice: 55.99, rating: 4.7, reviews: 210, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 26, name: 'Collar de Plata', category: 'accesorios', price: 120.00, originalPrice: null, rating: 4.8, reviews: 90, image: 'https://images.unsplash.com/photo-1599643478514-4a410f038084?q=80&w=600&auto=format&fit=crop', badge: { text: 'Nuevo', color: 'info' }
  },
  {
    id: 27, name: 'Gorra de Béisbol', category: 'accesorios', price: 22.99, originalPrice: null, rating: 4.3, reviews: 130, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 28, name: 'Bufanda de Lana', category: 'accesorios', price: 28.99, originalPrice: 35.99, rating: 4.6, reviews: 55, image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop', badge: { text: 'Oferta', color: 'success' }
  },
  {
    id: 29, name: 'Pulsera de Cuero', category: 'accesorios', price: 18.99, originalPrice: null, rating: 4.2, reviews: 40, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop', badge: null
  },
  {
    id: 30, name: 'Bolso de Mano', category: 'accesorios', price: 150.99, originalPrice: null, rating: 4.7, reviews: 110, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=600&auto=format&fit=crop', badge: { text: 'Popular', color: 'primary' }
  }
];
