using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class SectorDTO
    {
        public int IdSector { get; set; }
        public string NameSector { get; set; }

        public static SectorDTO ToSectorDTO(Sector c)
        {
            SectorDTO c1 = new SectorDTO();
            c1.IdSector = c.IdSector;
            c1.NameSector = c.NameSector;

            return c1;

        }
        public static Sector ToSector(SectorDTO c)
        {
            Sector c1 = new Sector();
            c1.IdSector = c.IdSector;
            c1.NameSector = c.NameSector;
            return c1;
        }
        public static List<Sector> ToListSector(List<SectorDTO> listc)
        {
            List<Sector> lc = new List<Sector>();
            foreach (var item in listc)
            {
                lc.Add(ToSector(item));
            }
            return lc;
        }
        public static List<SectorDTO> ToListSectorDTO(List<Sector> listc)
        {
            List<SectorDTO> lc = new List<SectorDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToSectorDTO(item));
            }
            return lc;
        }

    }
}
