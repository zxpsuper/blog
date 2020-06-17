class Database { 
    select(sql) { 
        const mysql = require('mysql'); 
        return new Promise(resolve => { 
            // 连接数据库，并执行 sql 语句进行查询 
            mysql.createConnection().query(sql, (error, results, fields) => { 
                const success = results.length > 0 ? true : false; 
                resolve(success); 
            }); 
        }); 
    } 
}

class Service { 
    constructor(db) { this.db = db; } 
    async login(username, password) { 
        // 
        const db = new Database(); 
        const success = await this.db.select(select * from user where username=${username} and password=${password} ); 
        return success ? '登录成功' : '登录失败'; 
    } 
}

class Web { 
    constructor(service) { this.service = service; } 
    matchRouter(path) { 
        switch (path) { 
            case 'login': // 
            const service = new Service(); 
            const { username, password } = path.query; 
            return this.service.login(username, password); 
        } 
    } 
}

// 使用 web 层之前，必须手动创建依赖，并注入 
const database = new Database(); 
const service = new Service(database); 
const web = new Web(service); 
web.matchRouter('login');