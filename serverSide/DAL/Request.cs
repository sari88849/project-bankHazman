//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Request
    {
        public int CodeRequest { get; set; }
        public int CodeStudent { get; set; }
        public int CodeLimit { get; set; }
        public Nullable<decimal> MaxCosting { get; set; }
        public Nullable<int> PlayedForTime { get; set; }
    
        public virtual Limit Limit { get; set; }
        public virtual Useres Useres { get; set; }
    }
}
