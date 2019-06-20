﻿/** 
 * Auto Generated Code
 * Please do not modify this file manually 
 * Assembly Name: "ClassManagementSystem.API"
 * Source Type: "C:\Users\Eric\Documents\GitHub\ClassManagementSystem\ClassManagementSystem.API\bin\Debug\netcoreapp2.2\ClassManagementSystem.API.dll"
 * Generated At: 2019-06-18 00:17:15.855
 */

export type RoleEnum = 'Administrator'|'User'|'Visitor';

declare global{
	interface Number{
		toRoleEnum (): RoleEnum;
	}
}

export class RoleEnumConverter extends Number {
	public static convert (value: number): RoleEnum {
		switch(value){
			case 0:
				return 'Administrator';
			case 1:
				return 'User';
			case 2:
				return 'Visitor';
		}
	}
	public static parse (value: string): number | undefined {
		switch(value){
			case 'Administrator':
				return 0;
			case 'User':
				return 1;
			case 'Visitor':
				return 2;
		}
		return undefined;
	}
	public static all: RoleEnum[] = ['Administrator', 'User', 'Visitor'];
}

class RoleEnumExtensions extends Number {
	public toRoleEnum (): RoleEnum {
		return RoleEnumConverter.convert(<any>this);
	}
}

Number.prototype.toRoleEnum = RoleEnumExtensions.prototype.toRoleEnum;

export module RoleEnum {
	export const Administrator = 'Administrator';
	export const User = 'User';
	export const Visitor = 'Visitor';
}
