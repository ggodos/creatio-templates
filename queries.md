# Запросы для бд postgresql

### Разблокировать четотоам

```sql
update "SysPackage"
set "IsChanged" = False, "InstallType" = 1, "IsLocked" = False, "Maintainer" = 'Customer'
where "Name" = 'PACKAGENAME'
```
