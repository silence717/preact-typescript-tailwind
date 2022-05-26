class Storage {
    static setItem(key: string, value: unknown): void {
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    static getItem(key: string): any {
        const value = sessionStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
        return null
    }

    static removeItem(key: string): void {
        sessionStorage.removeItem(key)
    }
}

export default Storage
