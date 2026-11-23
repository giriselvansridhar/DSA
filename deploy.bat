@echo off
cd /d "%~dp0"
git add .
git commit -m "Update %date%"
git push
echo.
echo Done. Site updates in about 1 minute.
pause
