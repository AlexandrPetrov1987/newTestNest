import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";

require('dotenv').config()


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'TwiJDhpsiV',
            database: 'june-21',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            migrationsRun: true,
            migrations: ['dist/database/migrations/*.js'],
            synchronize: true,
            cli: {migrationsDir: 'database/migrations'}
        }), UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {

}
