import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { PathLocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsersWithRoles() {
    return this.http.get(this.baseUrl + 'admin/usersWithRoles');
  }

  updateUserRoles(user: User, roles: {}) {
    return this.http.post(
      this.baseUrl + 'admin/editRoles/' + user.username,
      roles
    );
  }
  getPhotosForApproval() {

    return this.http.get(this.baseUrl + 'admin/photosForModeration');

  }

  approvePhoto(photoId) {
    return this.http.post(
      this.baseUrl + 'admin/approvePhoto/' + photoId,
      {}
    );

  }

  rejectPhoto(photoId) {
    return this.http.post(this.baseUrl + 'admin/rejectPhoto/' + photoId, {});

  }
}
