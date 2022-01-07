const genderMap = new Map().set(1, '男').set(2, '女');
class User {
  constructor({
    name, // 姓名
    id, // id
    gender, // 性别
    age, // 年龄
    account, // 账号
    address, // 地址
    height, // 身高
    weight, // 体重
    email, // 邮箱
    tel, // 手机号
  }) {
    return {
      name,
      id,
      gender: genderMap.get(gender),
      age,
      account,
      address,
      height,
      weight,
      email,
      tel,
    };
  }
}

export const createUser = (params) => new User(params);
