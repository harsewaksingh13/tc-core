
export interface StorageManager {
    getItem(key: string) : string | null
    setItem(key: string, value: string) : void
    clear() : void
}



class StorageManagerImpl implements StorageManager {

     storage = localStorage

    clear(): void {
        this.storage.clear()
    }

    getItem(key: string): string | null {
        let value = this.storage.getItem(key)
        if(value) {
           return value
        }
        return null
    }

    setItem(key: string, value: string) {
        this.storage.setItem(key,value)
    }

}

const storageManager: StorageManager = new StorageManagerImpl();

export default storageManager;
