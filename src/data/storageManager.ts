
export interface StorageManager {
    getItem(key: string) : string | null
    setItem(key: string, value: string) : void
    clear() : void
}



class StorageManagerImpl implements StorageManager {

     storage = new Map<string,any>();

    clear(): void {
        this.storage.clear()
    }

    getItem(key: string): string {
        return this.storage.get(key)
    }

    setItem(key: string, value: string) {
        this.storage.set(key,value)
    }

}

const storageManager: StorageManager = new StorageManagerImpl();

export default storageManager;
