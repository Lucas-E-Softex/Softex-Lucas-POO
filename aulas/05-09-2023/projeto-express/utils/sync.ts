import { Sequelize } from "sequelize"

export default async function modelsSync(sequelize:any){
    await sequelize.sync({force:true})
}