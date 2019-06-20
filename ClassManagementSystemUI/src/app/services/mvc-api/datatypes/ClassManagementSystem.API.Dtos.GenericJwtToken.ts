/** 
 * Auto Generated Code
 * Please do not modify this file manually 
 * Assembly Name: "ClassManagementSystem.API"
 * Source Type: "C:\Users\Eric\Documents\GitHub\ClassManagementSystem\ClassManagementSystem.API\bin\Debug\netcoreapp2.2\ClassManagementSystem.API.dll"
 * Generated At: 2019-06-18 00:17:15.758
 */
import { RoleEnum } from '../enums/ClassManagementSystem.API.Dtos.RoleEnum';
export interface GenericJwtToken {
	Id?: string;
	Roles?: RoleEnum[];
	Name?: string;
	Token?: string;
	Valid?: boolean;
	ExpiringDate?: string;
}
