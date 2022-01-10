import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user = new BehaviorSubject({});
  userSource = this.user.asObservable();
  constructor(private http: HttpClient) {}

  /**
   * Register New User
   * @param user 
   * @returns 
   */
  registerUser(user) {
    return this.http.post(environment.API_ENPOINT + "/users", user);
  }

  /**
   * Get User Details
   * @param userId 
   * @returns 
   */
  getUser(userId) {
    return this.http.get(environment.API_ENPOINT + "/users/" + userId);
  }

  /**
   * Edit User Profile
   * @param userObj 
   * @returns 
   */
  editUserProfile(userObj) {
    return this.http.put(
      environment.API_ENPOINT + "/users/" + userObj.id,
      userObj
    );
  }

  /**
   * chagne User Subject variable
   * @param data 
   */
  changeUser(data) {
    this.user.next(data);
  }
}
