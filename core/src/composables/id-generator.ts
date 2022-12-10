export const useIdGenerator = (prefix = 'id') => {
	return `${prefix}-${Math.random().toString(16).slice(2)}`
}
