const getNumberIntervals = intervals => {
  const min = 0;
  const max = 20;
  // 先照 interval[0] 排序
  intervals.sort((a, b) => a[0] - b[0]);

  const overlap = [];
  const notInclude = [];
  let prevInterval = intervals[0];

  // 檢查最小數
  if (prevInterval[0] !== min) {
    notInclude.push([min, prevInterval[0] - 1]);
  }

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
   
    // 重疊區間處理
    if (current[0] <= prevInterval[1]) {
      const range = [
        current[0], 
        Math.min(prevInterval[1], current[1])
      ];
      overlap.push(range);
      prevInterval = [current[0], Math.max(prevInterval[1], current[1])];
    } else {
      // 非重疊區間處理
      const range = [
        prevInterval[1] + 1,
        current[0] - 1
      ];
      notInclude.push(range);
      prevInterval = current;
    }
  }

  // 檢查最大歲數
  if (prevInterval[1] < max) {
    notInclude.push([prevInterval[1] + 1, max]);
  }

  return {
    overlap,
    notInclude
  };
};

export default getNumberIntervals;