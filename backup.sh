DB_NAME="elastix"
CRON_USER="root"
PASSWORD="Honey@58259"
FULLDATE=$(date +"%Y-%d-%m %H:%M")
NOW=$(date +"%Y-%m-%d-%H-%M")
MYSQL_DUMP=`mysqldump`
GIT=`git`
TEMP_BACKUP="latest_backup.sql"
BACKUP_DIR=$(date +"%Y/%m")

git pull origin HEAD

mysqldump --user="$CRON_USER" --password="$PASSWORD" "$DB_NAME" > $TEMP_BACKUP &
wait
# Make backup directory if not exists (format: {year}/{month}/)

mkdir -p $BACKUP_DIR

# Compress SQL dump
zip $BACKUP_DIR/$DB_NAME-$NOW-sql.zip $TEMP_BACKUP

# Remove original SQL dump
rm -f $TEMP_BACKUP

# file more then 30 days
find -name "*.zip" -type f -mtime +30 -exec rm -f {} \;

# Add to Git and commit
git add -A
git commit -m "Automatic backup - $FULLDATE"
git push origin HEAD

curl https://demoadmin.ultimateparcel.com/multichannel/sendbackupmail
