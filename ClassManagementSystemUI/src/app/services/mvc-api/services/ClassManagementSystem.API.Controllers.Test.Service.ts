/** 
 * Auto Generated Code
 * Please do not modify this file manually 
 * Assembly Name: "ClassManagementSystem.API"
 * Source Type: "C:\Users\Eric\Documents\GitHub\ClassManagementSystem\ClassManagementSystem.API\bin\Debug\netcoreapp2.2\ClassManagementSystem.API.dll"
 * Generated At: 2019-06-15 19:42:15.54
 */
import { IntValue } from '../datatypes/ClassManagementSystem.API.Dtos.IntValue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class TestService {
	constructor(private $httpClient: HttpClient) {{}}
	public $baseURL: string = '<ClassManagementSystem.API>';
	public Add(a: number, b: number): Observable<IntValue> {
		return this.$httpClient.get<IntValue>(this.$baseURL + 'Test' + `?a=${encodeURIComponent(String(a))}&b=${encodeURIComponent(String(b))}`, {});
	}
}
