export function getDaysUntilDeadline(deadlineString) {
    if (!deadlineString) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    const deadline = new Date(deadlineString);
    deadline.setHours(0, 0, 0, 0);
    
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}