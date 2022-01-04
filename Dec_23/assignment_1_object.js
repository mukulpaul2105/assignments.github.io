
//check from the objects to find greater than or equal to 85marks.
var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "Aayush Sinha",
    'subject': "MERN"
  },
  'students': [{
      'name': 'Tony',
      'marks': 98,
    },
    {
      'name': 'Hokeye',
      'marks': 76,
    },
    {
      'name': 'Thor',
      'marks': 95,
    },
    {
      'name': 'Black Widow',
      'marks': 70,
    },
    {
     'name': 'Loki',
     'marks': 78,
    },
    {
     'name': 'Red Skull',
     'marks': 60,
    },
    {
     'name': 'Hulk',
     'marks': 79,
    },
    {
      'name': 'Black Panther',
      'marks': 86,
     }
  ],
};
for( var i = 0; i < g_class.students.length; i = i + 1 ){

  if( g_class.students[i].marks >= 85 ){

    console.log( g_class.students[i].name );
  }
}