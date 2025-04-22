// src/types/global.d.ts
import { ShowMessageFunction } from '../utils/showMessage';  // 假设你已经导出了这个类型

declare global {
  interface Window {
    showMessage: ShowMessageFunction;
  }
}


