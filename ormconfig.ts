import { ConfigModule } from "@nestjs/config";
import dbConfiguration from "./src/config/dbconfig";

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfiguration],
})

export default dbConfiguration()