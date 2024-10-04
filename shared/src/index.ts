export function greet(name: string): string {
	return `Hello, ${name}!`;
  }

export const getNameInitials = (name: string): string  => name
	.split(' ', 2)
	.map(name => name[0])
	.join('')
	.toUpperCase()