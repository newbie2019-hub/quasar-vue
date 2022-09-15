export function tableColumns() {

 const albumColumns = [
  {
   name: 'id',
   label: 'ID',
   align: "left",
   field: row => row.id,
   sortable: true
  },
  {
   name: 'album',
   required: true,
   label: 'Album',
   align: "left",
   field: 'title',
   sortable: true
  },
  {
   name: 'actions',
   required: true,
   label: 'Actions',
   field: 'actions',
   align: "left",
   sortable: true
  },
 ]

 const userColumns = [
  {
   name: "name",
   required: true,
   label: "User",
   align: "left",
   field: "name",
   sortable: true,
  },
  {
   name: "username",
   align: "left",
   label: "Username",
   field: "username",
   sortable: true,
  },
  {
   name: "albums",
   required: true,
   label: "Total Albums",
   align: "left",
   field: (row) => row.albums.length,
   sortable: true,
  },
  {
   name: "address",
   label: "Address",
   align: "left",
   field: (row) => row.address.street + "," + row.address.city,
   sortable: true,
  },
  { name: "phone", label: "Phone", field: "phone", align: "left" },
  { name: "website", label: "Website", field: "website", align: "left" },
  {
   name: "company",
   label: "Company",
   field: (row) => row.company.name,
   align: "left",
  },
  {
   name: "actions",
   label: "Actions",
   field: "actions",
   align: "left",
  }
 ];

 return { userColumns, albumColumns }
}