package main

import "fmt"

// func main() {
// 	// 定义map变量
// 	var m map[int]string
// 	// 只声明map内存 没有分配空间
// 	// 必须通过make函数进行初始化，才会分配空间
// 	m = make(map[int]string, 10) // map可以存放10个键值对
// 	m[1] = "zhy"
// 	m[2] = "ljq"
// 	fmt.Println(m)

// 	// 方式2
// 	b := make(map[int]string)
// 	b[1] = "1"
// 	fmt.Println(b)

// 	// 方式3
// 	c := map[int]string{
// 		1: "zhy",
// 		2: "ljq",
// 	}
// 	fmt.Println(c)

// 	/*
// 		操作
// 		增 删 改 查
// 	*/
// 	// 增
// 	c[3] = "z"
// 	// 改
// 	c[2] = "zz"
// 	// 查
// 	v, b1 := c[1]
// 	fmt.Println(v)
// 	fmt.Println(b1)
// 	// 删 遍历删除 重新赋值 覆盖
// 	delete(c, 1)
// 	fmt.Println(c)

// 	/* 获取长度 */
// 	fmt.Println(len(c))

// 	/* 遍历 */
// 	for idx, v := range c {
// 		fmt.Println(idx, v)
// 	}

// 	/* 加深难度 */
// 	// z := make(map[string]map[int]string){
// 	// 	"z":make(map[int]string){
// 	// 		2:"zzz",
// 	// 	}
// 	// }
// }

// 定义老师的结构体，将老师中的各个属性 统一放入结构体中管理

type Teacher struct {
	// 变量名大写 外界可以访问这个属性
	Name string
	Age  int
}

func main() {
	// 创建老师结构体的实列、对象、变量 // 方法1
	var t1 Teacher // var a int
	t1.Name = "zhy"
	fmt.Println(t1.Name)

	// 方法2
	// var t2 Teacher = Teacher{"zhy", 22}
	var t2 Teacher = Teacher{
		Name: "zhy",
		Age:  22,
	}
	fmt.Println(t2)

	// 方法3 返回的是结构体的指针
	var t3 *Teacher = new(Teacher)
	// t3是指针，t3其实指向的就是地址，应该给这个地址的指向的对象的字段赋值
	(*t3).Name = "zhy" // *的作用，根据地址取值
	t3.Age = 18        // 一样可以
	fmt.Println(t3)
	fmt.Println(*t3)

	//方法4 返回的是结构体的指针
	var t4 *Teacher = &Teacher{
		Name: "zhy",
	}
	fmt.Println(*t4)

	// 结构体是用户单独定义的类型，和其它类型进行转换时需要有完全相同的字段（名字，个数和类型）
	// 结构体进行type重新定义（相当于取别名），go认为是新的数据类型，但是相互间可以强转
}
