import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getDaysUntilDeadline, validateTask } from '../logic/taskManager';

describe('taskManager - бізнес-логіка', () => {
    describe('getDaysUntilDeadline', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2026-02-22T00:00:00Z'));
        });

        afterEach(() => {
            vi.useRealTimers();
        });

        it('коректно розраховує дні до майбутнього дедлайну', () => {
            const result = getDaysUntilDeadline('2026-02-24T00:00:00Z');
            expect(result).toBe(2);
        });

        it('повертає 0, якщо дедлайн сьогодні', () => {
            const result = getDaysUntilDeadline('2026-02-22T00:00:00Z');
            expect(result).toBe(0);
        });

        it('повертає відємне значення, якщо дедлайн прострочено', () => {
            const result = getDaysUntilDeadline('2026-02-20T00:00:00Z');
            expect(result).toBe(-2);
        });

        it('повертає null, якщо дату не передано', () => {
            expect(getDaysUntilDeadline()).toBeNull();
        });
    });

    describe('validateTask', () => {
        it('повертає true для валідного завдання', () => {
            const task = { title: 'Зробити лабу', deadline: '2026-02-25' };
            expect(validateTask(task)).toBe(true);
        });

        it('повертає false, якщо назва порожня', () => {
            const task = { title: '   ', deadline: '2026-02-25' };
            expect(validateTask(task)).toBe(false);
        });
    });
});