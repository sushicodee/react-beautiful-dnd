const initialData = {
    tasks: {
        'task-1': {
            id: 'task-1',
            content: 'take bath'
        },
        'task-2': {
            id: 'task-2',
            content: 'eat food'
        },
        'task-3': {
            id: 'task-3',
            content: 'take nap'
        },
        'task-4': {
            id: 'task-4',
            content: 'take meds'
        },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'TODO',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'TODO',
            taskIds: ['task-1']
        },
        'column-3': {
            id: 'column-3',
            title: 'TODO',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],

}
export default initialData;