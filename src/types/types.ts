export interface IDESCRIPTION {
    status: string,
    id: number
}

export interface ITODO extends IDESCRIPTION{
    userId: number,
    title: string,
    completed: boolean,
}
