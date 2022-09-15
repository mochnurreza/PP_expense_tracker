```txt
postgres://whworfuivgtfzd:47d6d2c83ad374a7a46f0101ffc40b0a5c6a5da972b76a1131679b93cc789ccf@ec2-18-208-55-135.compute-1.amazonaws.com:5432/dua219lak6rrs
```

```js
USWAH@TeamOs-PC MINGW64 /d/learn/PHASE1/PP_expense_tracker-2 (Development-1)
$ git commit -am "Please deploy it"
[Development-1 72d4eb9] Please deploy it
 1 file changed, 1 insertion(+), 1 deletion(-)

USWAH@TeamOs-PC MINGW64 /d/learn/PHASE1/PP_expense_tracker-2 (Development-1)
$ git push heroku
Enumerating objects: 150, done.
Counting objects: 100% (150/150), done.
Delta compression using up to 4 threads
Compressing objects: 100% (87/87), done.
Writing objects: 100% (150/150), 69.55 KiB | 1.74 MiB/s, done.
Total 150 (delta 69), reused 96 (delta 44), pack-reused 0
remote: Pushed to branch other than [main, master], skipping build.
To https://git.heroku.com/guarded-everglades-99367.git
 * [new branch]      Development-1 -> Development-1

USWAH@TeamOs-PC MINGW64 /d/learn/PHASE1/PP_expense_tracker-2 (Development-1)
$ heroku logs --tail
2022-09-15T20:03:34.878525+00:00 app[api]: Release v1 created by user tribagus0510@gmail.com
2022-09-15T20:03:34.878525+00:00 app[api]: Initial release by user tribagus0510@gmail.com
2022-09-15T20:03:35.052569+00:00 app[api]: Enable Logplex by user tribagus0510@gmail.com2022-09-15T20:03:35.052569+00:00 app[api]: Release v2 created by user tribagus0510@gmail.com
2022-09-15T20:06:01.290184+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/" host=guarded-everglades-99367.herokuapp.com request_id=989e7ed5-3eac-4569-99b3-b407a0f8bc2e fwd="125.161.83.250" dyno= connect= service= status=502 bytes= protocol=https
2022-09-15T20:06:01.829787+00:00 heroku[router]: at=info code=H81 desc="Blank app" method=GET path="/favicon.ico" host=guarded-everglades-99367.herokuapp.com request_id=2d50917d-9ea1-462a-a6f5-b709a109d740 fwd="125.161.83.250" dyno= connect= service= status=502 bytes= protocol=https
2022-09-15T20:08:54.716202+00:00 app[api]: Attach DATABASE (@ref:postgresql-sinuous-22436) by user tribagus0510@gmail.com
2022-09-15T20:08:54.716202+00:00 app[api]: Running release v3 commands by user tribagus0510@gmail.com
2022-09-15T20:08:54.727665+00:00 app[api]: @ref:postgresql-sinuous-22436 completed provisioning, setting DATABASE_URL. by user tribagus0510@gmail.com
2022-09-15T20:08:54.727665+00:00 app[api]: Release v4 created by user tribagus0510@gmail.com

```
