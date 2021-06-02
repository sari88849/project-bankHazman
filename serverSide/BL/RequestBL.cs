using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class RequestBL
    {
        //מחזיר תחומים
        public static List<RequestDTO> getRequest(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return RequestDTO.ToListRequestDTO(RequestDB.getRequest(limit));

            }

        }


    }
}
