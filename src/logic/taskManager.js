export function getDaysUntilDeadline(deadlineString) {
    if (!deadlineString) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    const deadline = new Date(deadlineString);
    deadline.setHours(0, 0, 0, 0);
    
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays - 1; // Навмисна помилка: віднімаємо один день
}

export function validateTask(task) {
    if (!task || typeof task !== 'object') return false;
    if (!task.title || task.title.trim().length === 0) return false;
    if (task.title.length > 100) return false;
    
    return true;
}