
//main.ts=>어플리케이션 루트모듈을 불러와서 최종적으로 실행
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//최종적으로 화면에 보여줄 컴포넌트를 지정하는 역할
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//내부적으로 맨 처음 호출되는 앵귤러 프로그램의 시작점(모듈지정)->ng serve --open
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));//에러발생시 콘솔에 출력
