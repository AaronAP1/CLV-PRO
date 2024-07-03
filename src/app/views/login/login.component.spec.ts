import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/api/login.service';
import { AuthService } from 'src/app/auth/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: jasmine.SpyObj<LoginService>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['setSession', 'logout']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method on login button click', () => {
    spyOn(component, 'login');
    const button = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;
    button.click();
    expect(component.login).toHaveBeenCalled();
  });

  it('should call salir method on salir button click', () => {
    spyOn(component, 'salir');
    const button = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    button.click();
    expect(component.salir).toHaveBeenCalled();
  });

  it('should bind username and password inputs to component properties', () => {
    const usernameInput = fixture.debugElement.query(By.css('input#username')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input#password')).nativeElement;

    usernameInput.value = 'testuser';
    passwordInput.value = 'password';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.username).toBe('testuser');
    expect(component.password).toBe('password');
  });

  it('should navigate to /principal on successful login as USER', () => {
    const response = {
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZW85IiwiaWF0IjoxNzIwMDIxOTA1LCJleHAiOjE3MjAwMjMzNDV9.npMMUW-Ws4WZRwhULI3R44ya6EKnaeflmbRlkba6VU4',
      rol: 'USER',
      codigodepagoL: '73776464',
      usuario: 'testeo9'
    };
    loginService.login.and.returnValue(of(response));

    component.username = 'testeo9';
    component.password = '1234';
    component.login();

    expect(loginService.login).toHaveBeenCalledWith({ username: 'testeo9', password: '1234' });
    expect(authService.setSession).toHaveBeenCalledWith(response.token, response.usuario, response.codigodepagoL);
    expect(router.navigate).toHaveBeenCalledWith(['/principal']);
  });

  it('should navigate to /principaladmin on successful login as ADMIN', () => {
    const response = {
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZW8xMSIsImlhdCI6MTcyMDAyMTgyNywiZXhwIjoxNzIwMDIzMjY3fQ.2K-gdKG_JLDv3PK4WSqhlrZLBfSMUg-yV5XluPRX2kQ',
      rol: 'ADMIN',
      codigodepagoL: '73776464',
      usuario: 'testeo11'
    };
    loginService.login.and.returnValue(of(response));

    component.username = 'testeo11';
    component.password = '1234';
    component.login();

    expect(loginService.login).toHaveBeenCalledWith({ username: 'testeo11', password: '1234' });
    expect(authService.setSession).toHaveBeenCalledWith(response.token, response.usuario, response.codigodepagoL);
    expect(router.navigate).toHaveBeenCalledWith(['/principaladmin']);
  });

  it('should handle login error', () => {
    const errorResponse = { error: 'Invalid credentials' };
    loginService.login.and.returnValue(throwError(errorResponse));

    component.username = 'testuser';
    component.password = 'password';
    component.login();

    expect(loginService.login).toHaveBeenCalledWith({ username: 'testuser', password: 'password' });
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to /landing on salir', () => {
    component.salir();
    expect(router.navigate).toHaveBeenCalledWith(['/landing']);
  });
});
