using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class RequestDTO
    {
        public int CodeRequest { get; set; }
        public int CodeStudent { get; set; }
        public int CodeLimit { get; set; }
        public Nullable<decimal> MaxCosting { get; set; }
        public Nullable<int> PlayedForTime { get; set; }

       //DTOממיר ל
        public static RequestDTO ToRequestDTO(Request c)
        {
            RequestDTO c1 = new RequestDTO();
            c1.CodeRequest = c.CodeRequest;
            c1.CodeStudent = c.CodeStudent;
            c1.CodeLimit = c.CodeLimit;
            c1.MaxCosting = c.MaxCosting;
            c1.PlayedForTime = c.PlayedForTime;
            return c1;

        }
        //DALמחזיר
        public static Request ToRequest(RequestDTO c)
        {
            Request c1 = new Request();
            c1.CodeRequest = c.CodeRequest;
            c1.CodeStudent = c.CodeStudent;
            c1.CodeLimit = c.CodeLimit;
            c1.MaxCosting = c.MaxCosting;
            c1.PlayedForTime = c.PlayedForTime;
            return c1;

        }
        public static List<Request> ToListRequest(List<RequestDTO> listc)
        {
            List<Request> lc = new List<Request>();
            foreach (var item in listc)
            {
                lc.Add(ToRequest(item));
            }
            return lc;
        }
        public static List<RequestDTO> ToListRequestDTO(List<Request> listc)
        {
            List<RequestDTO> lc = new List<RequestDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToRequestDTO(item));
            }
            return lc;
        }
    }
}
