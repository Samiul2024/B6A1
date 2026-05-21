function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  if (typeof value === 'number') {
    return value * 10;
  }

  return !value;
}

function getLength(value: string | unknown[]): number {
  if (typeof value === 'string') {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}

class Person {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type RatedItem = {
  title: string;
  rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${
    book.isAvailable ? 'Yes' : 'No'
  }`;
}

function getUniqueValues(
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number)[] {
  const combined: (string | number)[] = [];
  const result: (string | number)[] = [];

  for (let i = 0; i < array1.length; i++) {
    combined[combined.length] = array1[i];
  }

  for (let i = 0; i < array2.length; i++) {
    combined[combined.length] = array2[i];
  }

  for (let i = 0; i < combined.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (combined[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = combined[i];
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products.reduce((total, product) => {
    const subtotal = product.price * product.quantity;

    const discountAmount = product.discount
      ? (subtotal * product.discount) / 100
      : 0;

    return total + (subtotal - discountAmount);
  }, 0);
}