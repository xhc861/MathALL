import { simplifySquareRoot, formatSquareRoot, calculateDistance } from '../src/utils/distanceCalculator';

console.log('=== 测试根号简化功能 ===\n');

// 测试1: 简化 √8
const test1 = simplifySquareRoot(8);
console.log('√8 =', formatSquareRoot(test1.coefficient, test1.radicand));
console.log('预期: 2√2\n');

// 测试2: 简化 √12
const test2 = simplifySquareRoot(12);
console.log('√12 =', formatSquareRoot(test2.coefficient, test2.radicand));
console.log('预期: 2√3\n');

// 测试3: 简化 √18
const test3 = simplifySquareRoot(18);
console.log('√18 =', formatSquareRoot(test3.coefficient, test3.radicand));
console.log('预期: 3√2\n');

// 测试4: 简化 √50
const test4 = simplifySquareRoot(50);
console.log('√50 =', formatSquareRoot(test4.coefficient, test4.radicand));
console.log('预期: 5√2\n');

// 测试5: 完全平方数 √16
const test5 = simplifySquareRoot(16);
console.log('√16 =', formatSquareRoot(test5.coefficient, test5.radicand));
console.log('预期: 4\n');

// 测试6: 质数 √5
const test6 = simplifySquareRoot(5);
console.log('√5 =', formatSquareRoot(test6.coefficient, test6.radicand));
console.log('预期: √5\n');

console.log('=== 测试距离计算 ===\n');

// 测试7: 点(0,0)到(3,4)的距离
const dist1 = calculateDistance(0, 0, 3, 4);
console.log('点(0,0)到(3,4)的距离:');
console.log('精确值:', dist1.exact);
console.log('小数值:', dist1.decimal);
console.log('平方:', dist1.squared);
console.log('预期: 5\n');

// 测试8: 点(0,0)到(1,1)的距离
const dist2 = calculateDistance(0, 0, 1, 1);
console.log('点(0,0)到(1,1)的距离:');
console.log('精确值:', dist2.exact);
console.log('小数值:', dist2.decimal);
console.log('平方:', dist2.squared);
console.log('预期: √2\n');

// 测试9: 点(0,0)到(2,2)的距离
const dist3 = calculateDistance(0, 0, 2, 2);
console.log('点(0,0)到(2,2)的距离:');
console.log('精确值:', dist3.exact);
console.log('小数值:', dist3.decimal);
console.log('平方:', dist3.squared);
console.log('预期: 2√2\n');

// 测试10: 点(1,2)到(4,6)的距离
const dist4 = calculateDistance(1, 2, 4, 6);
console.log('点(1,2)到(4,6)的距离:');
console.log('精确值:', dist4.exact);
console.log('小数值:', dist4.decimal);
console.log('平方:', dist4.squared);
console.log('预期: 5\n');
