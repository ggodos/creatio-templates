# Запросы для бд postgresql

### Разблокировать пакет

```sql
update "SysPackage"
set "IsChanged" = False, "InstallType" = 1, "IsLocked" = False, "Maintainer" = 'Customer'
where "Name" = 'PACKAGENAME'
```
