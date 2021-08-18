function solution(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 400 || nums[i] === 500) {
            nums.splice(i, 1); // 원본 배열의 원소가 삭제되고 배열의 길이가 변함.
            i--; // 배열의 index를 참조하는 i의 값을 하나 감소시켜야 함.
        }
    }
    return nums;
}

exports.solution = solution;