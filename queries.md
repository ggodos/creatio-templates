# Запросы для бд postgresql

### Разблокировать пакет

```sql
update "SysPackage"
set "IsChanged" = True, "IsLocked" = True, "InstallType" = 0,  "Maintainer" = 'Customer'
where "Name" = 'PACKAGE'
```
