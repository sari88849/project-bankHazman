using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class SectorBL
    {
        //שליפת המגדרים
        public static List<SectorDTO> getSector()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return SectorDTO.ToListSectorDTO(SectorDB.getSector());

            }

        }

        public static SectorDTO getSectorById(int sector)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return SectorDTO.ToSectorDTO(SectorDB.getSectorById(sector));

            }

        }
    }
}
