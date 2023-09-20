# HTTP HTTPS и их параметры
## Лабораторная работа №1
Воспользуемся ключами **-I, -L, -k**  
**-I** - ключ, отображающий только заголовки  
**-L** - ключ, принимающий и обрабатывающий перенаправления  
**-k** - ключ, игнорирующий сертификаты

### РГУПС
* curl rgups.ru -ILk

`HTTP/1.1 301 Moved Permanently` - ресурс был перемещен на другой URL  
`Server: nginx/1.19.1` - ервер, обрабатывающий текущий запрос  
`Date: Wed, 13 Sep 2023 17:42:24 GMT` - дата и время обработки запроса на сервере  
`Content-Type: text/html` - тип данных, передаваемых в теле ответа  
`Content-Length: 169` - размер данных, передаваемых в теле ответа  
`Connection: keep-alive` - директива, указывающая на сохранение подключения при передаче данных  
`Location: https://rgups.ru/` - новый URL  
`X-Powered-By: ProcessWire CMS` - реализованный на сервере системой управления контентом  
`Set-Cookie: wire=4a99a633cc3d09d5a8759b017e467155; path=/; HttpOnly; SameSite=Lax` - устанавливает cookie с именем wire  
`Expires: Thu, 19 Nov 1981 08:52:00 GMT` - указывается, что содержимое истекает в указанное время  
`Cache-Control: no-store, no-cache, must-revalidate` - настройки кеширования  
`Pragma: no-cache` - устаревший аналог заголовка Cache-Control  

### GitHub
* curl github.com -ILk

`Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With` - перечень заголовков, которые могут повлиять на содержание ответа сервера  
`ETag: W/"0255273cd16d30dfc5a633c02873b87b"` - идентификатор содержимого   
`Strict-Transport-Security: max-age=31536000; includeSubdomains; preload` - политика безопасности  
`X-Frame-Options: deny` - заголовок, указывающий на то, что сайт не может быть встроен во фреймы других сайтов  
`X-Content-Type-Options: nosniff` - указывает, что браузеры не должны интерпретировать MIME-типы неправильным образом  
`X-XSS-Protection: 0` - указывает на отсутствие фильтрации XSS-атак  
`Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin` - политика передачи в заголовке Referer информации об источнике запроса в разных ситуациях  
`Content-Security-Policy:` - политика безопасности контента  
`Accept-Ranges: bytes` - указывает, что сервер поддерживает запросы с определением диапазона байт  
`X-GitHub-Request-Id: 2A2B:CA33:2C928AC:2D0572C:65020238` - идентификатор запроса  

### РЖД
* curl rzd.ru -ILk

`HTTP/1.1 301 Moved Permanently
Date: Wed, 13 Sep 2023 19:54:14 GMT
Content-Type: text/html
Content-Length: 150
Connection: keep-alive
Location: https://rzd.ru:443/` - описаны выше

### Яндекс
* curl yandex.ru -ILk

`Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT` - список признаков клиента, которые сервер желает получить от пользователя  
`NEL` - определение политики отправки отчетов об ошибках сети в формате JSON  
`P3P` - ссылка на файл политики конфиденциальности в формате P3P  
`Portal: Home` - указывает на домашнюю страницу портала  
`Report-To` - определяет группу отчетов об ошибках сети  
`X-Robots-Tag` - указывает, что информация на странице будет недоступна для поисковых систем  
`X-XSS-Protection: 1; mode=block` - функция защиты от межсайтового скриптинга  

### Python
* curl python.org -ILk

`Retry-After: 0` - Указывает время, через которое клиент может повторить запрос  
`Via: 1.1 varnish` - Список посредников и примененных протоколов  
`X-Served-By: cache-fra-eddf8230035-FRA` - Уникальный идентификатор сервера кэширования  
`X-Cache: HIT` - Статус кеша, HIT указывает на успешное использование кеша  
`X-Cache-Hits: 0` - Количество хитов кеша для данного ресурса - здесь значение равно 0  
`X-Timer: S1694632427.439094,VS0,VE0` - Таймер, связанный с запросом  

### Saint GIT
* curl git-scm.com -ILk

`Expires: Wed, 13 Sep 2023 20:18:45 GMT` - Указывает время, после которого кэш считается просроченным  
`Server: cloudflare` - Название сервера, здесь используется сервер Cloudflare  
`CF-RAY: 8062bce43f4cd963-HEL` - Уникальный идентификатор заголовка Cloudflare  
`X-Download-Options: noopen` - Запрет на автоматическое открытие файлов после загрузки  
`X-Permitted-Cross-Domain-Policies: none` - Запрещает загрузку политики кросс-доменного обмена данными  
`Referrer-Policy: strict-origin-when-cross-origin` - Указывает на политику передачи значения заголовка  
`X-Runtime: 0.008824` - Время обработки запроса на сервере  
`CF-Cache-Status: HIT` - Статус кеша, уведомление о том, что этот ответ является результатом кеша сервера Cloudflare  
`Age: 11619` - Время, прошедшее с момента последней модификации ресурса  

### JetBrains
* curl jetbrains.com -ILk

`X-Amz-Cf-Pop: WAW51-P4` - Уникальный идентификатор сервера CloudFront  
`X-Frame-Options: DENY` - Запрещает отображение содержимого страницы во фрейме  
`Pragma: no-cache` - Указывает, что ответ не должен быть закеширован  

### VSC - this is best choose
* curl code.visualstudio.com -ILk

`-MSEdge-Ref: Ref A: B1F8E92378ED4F79B6B4B871856A9807 Ref B: STOEDGE1116 Ref C: 2023-09-13T19:25:40Z` - Заголовок, определенный серверами Edge  
`Feature-Policy` - Объявляет политику использования определенных функций браузера на сайте  
`Strict-Transport-Security` - Указывает браузеру на использование HTTPS протокола вместо HTTP и длительность этой политики  
`x-powered-by: WP Engine` - Указывает, что сайт функционирует на базе платформы WordPress с помощью WP Engine  
`Link: https://visualstudio.microsoft.com/; rel=shortlink` - Короткая ссылка на запрашиваемую веб-страницу  
`X-Cacheable: SHORT` - Указывает короткое время кеширования на стороне сервера  
`X-Cache-Group: normal` - Определяет группу кеша на стороне сервера  
`Access-Control-Allow-Origin:` - Определяет домены, которые могут получать доступ к ресурсам страницы  